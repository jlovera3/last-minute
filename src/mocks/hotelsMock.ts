import { Hotel } from "../interfaces/hotel";

export const hotelsMock: Hotel[] = [
    {
        id: 12321,
        name: "Park Plaza London Waterloo",
        location: {
            address: "6 Hercules Road",
            city: "London",
            latitude: 51.49845,
            longitude: -0.11343
        },
        stars: 4,
        checkIn: {
            from: "14: 00",
            to: "20: 00"
        },
        checkOut: {
            from: "07: 00",
            to: "10: 00"
        },
        contact: {
            phoneNumber: "+39 24322342",
            email: "park_plaza@gmail.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1499779963/Swindon_yjsrwz.jpg"
        ],
        userRating: 9.8,
        price: 120,
        currency: "EUR"
    },
    {
        id: 12322,
        name: "Belgrave House Hotel",
        location: {
            address: "28-32 Belgrave Road Victoria",
            city: "London",
            latitude: 51.49241,
            longitude: -0.14283
        },
        stars: 4,
        checkIn: {
            from: "12: 00",
            to: "20: 00"
        },
        checkOut: {
            from: "07: 00",
            to: "10: 00"
        },
        contact: {
            phoneNumber: "+44 5477432",
            email: "belgrave@gmail.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584265/g8wzbaqahffteguzal5d.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584267/zvpg4qui6pqp6t9lzmfz.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584269/storgpwbactbomqnevn5.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054438/Living_Area_26_7_mdxypk.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054438/Living_Area_25_6_rkyqhx.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054437/Guestroom_31_9_s2va2b.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054437/Guestroom_32_4_rpuq3s.jpg"
        ],
        userRating: 7.8,
        price: 100,
        currency: "EUR"
    },
    {
        id: 12323,
        name: "Crowne Plaza LONDON - KINGS CROSS",
        location: {
            address: "1 Kings Cross Road",
            city: "London",
            latitude: 51.52647,
            longitude: -0.11325
        },
        stars: 4,
        checkIn: {
            from: "11: 00",
            to: "20: 00"
        },
        checkOut: {
            from: "07: 00",
            to: "12: 00"
        },
        contact: {
            phoneNumber: "+44 5432356",
            email: "crowne_plaza@gmail.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584108/w5c81p3mvlymgutaklvx.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584110/xcpweycgssuafcwelsfi.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584112/jszs6ir3v6rt7oz23wo2.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584114/hq2suefoj8jgtmsklzic.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584116/oiycgfo6nyihkw5mzaur.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584118/o91al0de2i3iofi3cpcl.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584120/jeu5kw5yck3eqiyudcgp.jpg"
        ],
        userRating: 8.1,
        price: 200,
        currency: "EUR"
    },
    {
        id: 12324,
        name: "Dreamtel London Kensington",
        location: {
            address: "32-36 Hogarth Road Earl's Court",
            city: "London",
            latitude: 51.49338,
            longitude: -0.1919
        },
        stars: 3,
        checkIn: {
            from: "12: 00",
            to: "20: 00"
        },
        checkOut: {
            from: "07: 00",
            to: "10: 00"
        },
        contact: {
            phoneNumber: "+44 435432",
            email: "dreamtel@gmail.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194083/n88jigk27jtmvekqunbv.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194083/hervrov1xtxxm1npx5pn.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194083/xeiu7cyj31kyyxendgfc.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194083/h5avqjhygpft5sfmquyh.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194083/coexau5reg97lngstk7r.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194083/eyfwzrkzgpodl8xy7g27.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194084/s7sul9tkrpcrtssibovl.jpg"
        ],
        userRating: 6.4,
        price: 400,
        currency: "EUR"
    },
    {
        id: 12325,
        name: "The Z Hotel Shoreditch",
        location: {
            address: "136-144 City Road",
            city: "London",
            latitude: 51.52684,
            longitude: -0.08857
        },
        stars: 5,
        checkIn: {
            from: "11: 00",
            to: "20: 00"
        },
        checkOut: {
            from: "07: 00",
            to: "10: 00"
        },
        contact: {
            phoneNumber: "+44 435432",
            email: "the_z_hotel@gmail.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1430487613/Exterior_ajaxnb.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1430487565/Dining_uili4h.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1430487564/Dining_2_eobvne.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1430487564/Dining_1_aijns9.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1430487580/Lounge_1_qakzs8.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1430487579/Reception_t5mjkp.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1430487578/Lounge_gzoj1o.jpg"
        ],
        userRating: 7.4,
        price: 200,
        currency: "EUR"
    },
    {
        id: 12326,
        name: "Absolute Pleasure Yacht",
        location: {
            address: "Behind Hertsmere Rd West India Quay",
            city: "London",
            latitude: 51.5068844,
            longitude: -0.0218664
        },
        stars: 5,
        checkIn: {
            from: "13: 00",
            to: "24: 00"
        },
        checkOut: {
            from: "09: 00",
            to: "11: 00"
        },
        contact: {
            phoneNumber: "+44 333 400 6112",
            email: "info@absoluteyacht.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1601035242/dvx34hv6neyhla6547zi.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1601035241/hhzxxg4makd2hftm9qxs.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1601035241/yrpqzkra3rqcwuba3r6m.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1601035242/ar9frpn32o11wnztb5zw.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1601035242/aoujsd0w0xmw5hhl4c7j.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1601035241/vokkfyknalnjl7auoixu.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1601035241/fu96aga50efw3vyrxg00.jpg"
        ],
        userRating: 8.4,
        price: 20,
        currency: "EUR"
    },
    {
        id: 12327,
        name: "The Z Hotel Piccadilly",
        location: {
            address: "2 Orange Street",
            city: "London",
            latitude: 51.5090236,
            longitude: -0.1314056
        },
        stars: 4,
        checkIn: {
            from: "15: 00",
            to: "22: 00"
        },
        checkOut: {
            from: "11: 00",
            to: "14: 00"
        },
        contact: {
            phoneNumber: "+44 0800 083 4000",
            email: "contacts@zhotel.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1585385209/t8bcs01xrouncqsja0kv.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1585385208/hqgbxaxlajgnrdolfvnm.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1585385208/v2v2kwee59x2cvx7mwbk.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1599034326/vrkkkhmnbyzscgtbhjtu.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1599034325/ckzg5zn0umnpe7yln7yl.jpg"
        ],
        userRating: 8.4,
        price: 250,
        currency: "EUR"
    },
    {
        id: 12328,
        name: "Seraphine Kensington Olympia",
        location: {
            address: "225 Kensington High Street",
            city: "London",
            latitude: 51.4992955,
            longitude: -0.1973931
        },
        stars: 5,
        checkIn: {
            from: "16: 00",
            to: "20: 00"
        },
        checkOut: {
            from: "10: 00",
            to: "12: 00"
        },
        contact: {
            phoneNumber: "+44 0800 8736 4000",
            email: "contacts@seraphine.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1602647435/hb6zwn52nnnu8qhgjlet.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1584702056/bool6uurqftufzcm2jqj.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1584702056/egpdtmct9txubyux8lmp.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1584702056/emt88uypnhlqep0yfgq9.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1584702056/ypieyfzunwarqk2uw2iv.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1584702056/e13jhgy0h6a1tpzbkrbl.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1584702056/ftfctloiytdjcvsyi0uv.jpg"
        ],
        userRating: 9.1,
        price: 120,
        currency: "EUR"
    },
    {
        id: 12329,
        name: "Mercure London Bridge",
        location: {
            address: "71-79 Southwark Street",
            city: "London",
            latitude: 51.5052581,
            longitude: -0.0991698
        },
        stars: 4,
        checkIn: {
            from: "17: 00",
            to: "23: 00"
        },
        checkOut: {
            from: "9: 00",
            to: "13: 00"
        },
        contact: {
            phoneNumber: "+44 0810 57393 0873",
            email: "service@londobridge.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1451487792/1461_ho_02_p_2048x1536_hehoe6.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1451487791/1461_ho_03_p_2048x1536_kdivf0.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1451487791/1461_ba_02_p_2048x1536_hne8f9.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1451487791/1461_ba_01_p_2048x1536_hqcad1.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1451487791/1461_ba_00_p_2048x1536_lvfoxj.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1451487791/1461_ho_00_p_2048x1536_grsooe.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1451487786/1461_ro_02_p_2048x1536_l2lapq.jpg"
        ],
        userRating: 9.1,
        price: 109,
        currency: "EUR"
    },
    {
        id: 12330,
        name: "Holiday Inn Express",
        location: {
            address: "87 South Lambeth Road",
            city: "London",
            latitude: 51.4808166,
            longitude: -0.1242507
        },
        stars: 4,
        checkIn: {
            from: "12: 00",
            to: "16: 00"
        },
        checkOut: {
            from: "9: 00",
            to: "13: 00"
        },
        contact: {
            phoneNumber: "+44 0880 56483 0493",
            email: "customer@holidayinn.com"
        },
        gallery: [
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1529476568/Exterior_-_night_b6o9gw.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1529476577/Room_-_work_desk_with_lamp_ziflmz.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1529476578/Room_-_twin_room_dl1ip1.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1601293757/ygvwbqfsytvz5tclb9bi.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1601293759/epv345ml4uz6ngzbthyf.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1601293761/kkkifoclifx9cq3wns3d.jpg",
            "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1601293763/gocogwuvt0kluutz24bc.jpg"
        ],
        userRating: 6.7,
        price: 12,
        currency: "EUR"
    }
];