import TopBar from "@/src/components/common/TopBar";
import WheelScrollView from "@/src/components/layouts/WheelScrollView";
import ReelsScroll from "@/src/components/layouts/ReelsScrollView";
import CardComponent from "@/src/components/ui/card/CardComponent";
import GenericModal from "@/src/components/ui/modal/GenericModal";
import { useModalHandler } from "@/src/hooks/useModalHandler";
import { Hotel } from "@/src/interfaces/hotel";
import { fetchHotels } from "@/src/services/hotelService";
import tw from "@/src/styles/tailwind";
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Provider } from "react-native-paper";

/**
 * Screen to display a list of hotels fetched from the API.
 */
export default function HotelsScreen() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [displayMode, setDisplayMode] = useState<number>(0);
  const {
    modalVisible,
    modalTitle,
    modalOptions,
    openModal,
    closeModal,
    onSelectCallback,
  } = useModalHandler();

  useEffect(() => {
    async function loadHotels() {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadHotels();
  }, []);

  // Sorting function
  const sortHotels = (sortType: number) => {
    let sortedHotels = [...hotels];
    switch (sortType) {
      case 0: // Alphabetical ascending
        sortedHotels.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 1: // Alphabetical descending
        sortedHotels.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 2: // Price Low to High
        sortedHotels.sort((a, b) => a.price - b.price);
        break;
      case 3: // Price High to Low
        sortedHotels.sort((a, b) => b.price - a.price);
        break;
      case 4: // Star Rating
        sortedHotels.sort((a, b) => b.stars - a.stars);
        break;
      case 5: // User Rating
        sortedHotels.sort((a, b) => b.userRating - a.userRating);
        break;
      default:
        return;
    }
    setHotels(sortedHotels);
  };

  const handleSort = () => {
    openModal(
      "Sort Options",
      [
        {
          icon: "order-alphabetical-ascending",
          label: "Alphabetical A-Z",
          actionClicked: 0,
        },
        {
          icon: "order-alphabetical-descending",
          label: "Alphabetical Z-A",
          actionClicked: 1,
        },
        { icon: "cash-minus", label: "Price Low to High", actionClicked: 2 },
        { icon: "cash-plus", label: "Price High to Low", actionClicked: 3 },
        { icon: "star", label: "Star Rating", actionClicked: 4 },
        {
          icon: "emoticon-excited-outline",
          label: "User Rating",
          actionClicked: 5,
        },
      ],
      (selected) => {
        sortHotels(selected);
        closeModal(); // Close modal after selection
      }
    );
  };

  const handleDisplayMode = () => {
    openModal(
      "Display Options",
      [
        { icon: "format-list-bulleted", label: "List View", actionClicked: 0 },
        { icon: "animation-outline", label: "Wheel View", actionClicked: 1 },
        {
          icon: "align-vertical-distribute",
          label: "Reel View",
          actionClicked: 2,
        },
      ],
      (selected) => {
        setDisplayMode(selected);
        closeModal();
      }
    );
  };

  return (
    <Provider>
      <View style={tw`flex-1 bg-white`}>
        <TopBar
          title="Hotels in London"
          onActionOnePress={handleSort}
          onActionTwoPress={handleDisplayMode}
        />

        {displayMode === 0 ? (
          <FlatList
            data={hotels}
            keyExtractor={(hotel) => hotel.id.toString()}
            renderItem={({ item }) => <CardComponent hotel={item} />}
          />
        ) : displayMode === 1 ? (
          <WheelScrollView hotels={hotels} />
        ) : (
          <ReelsScroll hotels={hotels} />
        )}

        {modalVisible && (
          <GenericModal
            visible={modalVisible}
            title={modalTitle}
            modalOptions={modalOptions}
            onClose={closeModal}
            onSelect={onSelectCallback}
          />
        )}
      </View>
    </Provider>
  );
}
