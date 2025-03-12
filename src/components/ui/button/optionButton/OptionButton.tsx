import tw from "@/src/styles/tailwind";
import React, { useState } from "react";
import { Button, Portal, Modal } from "react-native-paper";
import { SortModal } from "../../modal/SortModal";

interface OptionButtonProps {
    title: string;
    modalType: "sort" | "display" | "tbd";
}

/**
 * Reusable button that opens a specific modal.
 */
export function OptionButton({ title, modalType }: OptionButtonProps) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button mode="outlined" onPress={() => setVisible(true)}>
                {title}
            </Button>
            <Portal>
                <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={tw`bg-white p-4 rounded-lg`}>
                    <SortModal modalType={modalType} onClose={() => setVisible(false)} />
                </Modal>
            </Portal>
        </>
    );
}
