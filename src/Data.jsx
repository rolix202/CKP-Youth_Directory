import { FaSignOutAlt } from "react-icons/fa";
import { images } from "./constants";
import { FaHouse, FaUserTie, FaUserPlus, FaPeopleGroup, FaAddressBook, FaPersonCircleCheck, FaPersonCirclePlus, FaGear } from "react-icons/fa6";

export const featured_info = [
    {
        id: 1,
        image: images.Roland,
        role: "PARISH PRIEST",
        name: "Rev. Fr Nicodemus Ugwoke",
        quote: "God does not give us everything we want, but He does fulfill His promises.",
    },
    {
        id: 2,
        image: images.img3,
        role: "OUR OWN YOUTH PRIEST",
        name: "Fr. Kenneth",
        quote: "Relying on God has to start all over everyday, as if nothing has yet been done."
    },
    {
        id: 3,
        image: images.img2,
        role: "CYON PRESIDENT",
        name: "Ebuka Iyidiobi",
        quote: "The best thing about the future is that it comes only one day at a time.",
    },
    {
        id: 4,
        image: images.Roland,
        role: "HIS ROYAL HIGHNESS",
        name: "Igwe Ochendo",
        quote: "There is not a single thing that Jesus cannot change, control, and conquer because he is the living Lord.",
    },
]

export const cyonites_info = [
    {
        id: 1,
        img: images.Roland,
        name: "Oodo Roland Uchenna",
        skill: "Web Developer",
        birthday: "13th December",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "Immaculate Heart Station",
    },
    {
        id: 2,
        img: images.testimonial2,
        name: "Oodo Kingsley Chinedu",
        skill: "Sales Representative",
        birthday: "10th September",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "St. Michael Station",
    },
    {
        id: 3,
        img: images.testimonial1,
        name: "Iyidiobi Rotanna",
        skill: "Civil Engineer",
        birthday: "7th July",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "St. Thomas Station",
    },
    {
        id: 4,
        img: images.testimonial3,
        name: "Mba Sopuluchukwu",
        skill: "Lab Scientist",
        birthday: "3rd March",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "St. Michael Station",
    },
    {
        id: 5,
        img: images.Roland,
        name: "Oodo Roland Uchenna freeman",
        skill: "Web Developer",
        birthday: "13th December",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "Immaculate Heart Station",
    },
    {
        id: 6,
        img: images.testimonial2,
        name: "Oodo Kingsley Chinedu",
        skill: "Sales Representative",
        birthday: "10th September",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "St. Michael Station",
    },
    {
        id: 7,
        img: images.testimonial1,
        name: "Iyidiobi Rotanna",
        skill: "Civil Engineer",
        birthday: "7th July",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "St. Thomas Station",
    },
    {
        id: 8,
        img: images.testimonial3,
        name: "Mba Sopuluchukwu",
        skill: "Lab Scientist",
        birthday: "3rd March",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "Immaculate Heart Station",
    },
    {
        id: 9,
        img: images.Roland,
        name: "Oodo Roland Uchenna freeman",
        skill: "Web Developer",
        birthday: "13th December",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "St. Michael Station",
    },
    {
        id: 10,
        img: images.testimonial2,
        name: "Oodo Kingsley Chinedu",
        skill: "Sales Representative",
        birthday: "10th September",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "St. Michael Station",
    },
    {
        id: 11,
        img: images.testimonial1,
        name: "Iyidiobi Rotanna",
        skill: "Civil Engineer",
        birthday: "7th July",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "St. Thomas Station",
    },
    {
        id: 12,
        img: images.testimonial3,
        name: "Mba Sopuluchukwu",
        skill: "Lab Scientist",
        birthday: "3rd March",
        facebook: "",
        instagram: "",
        twitter: "",
        station: "Immaculate Heart Station",
    },

]
export const accordion = [
    {
        id: 1,
        title: "Register as a CKP Cyon member",
        body: "Join CKP Cyon and become part of a welcoming community that values connection. Engage in various activities, both in-person and online, to build friendships, share experiences, and grow together in faith."
    },
    {
        id: 2,
        title: "List of CKP Cyon members",
        body: "Explore our confidential member list to connect with fellow CKP Cyon members. Easily find and connect with others who share your faith and values, and be part of our vibrant community."
    },
    {
        id: 3,
        title: "Connect with fellow members",
        body: "Connect with fellow CKP Cyon members to build lasting friendships, share experiences, and grow together in faith. Join our community events, discussions, and social gatherings. Stay engaged online through our forums and social media groups."
    }
]
export const nav = [
    {
        id: 1,
        path: ".",
        link: "Dashboard",
        icon: <FaHouse />
    },
    {
        id: 2,
        path: "admins",
        link: "Admins",
        icon: <FaUserTie />
    },
    {
        id: 3,
        path: "create-admin",
        link: "Create Admin",
        icon: <FaUserPlus />
    },
    {
        id: 4,
        path: "view-cyonites",
        link: "View Cyonites",
        icon: <FaPeopleGroup />
    },
    {
        id: 5,
        path: "add-cyonite",
        link: "Add Cyonite",
        icon: <FaAddressBook />
    },
    {
        id: 6,
        path: "featured-persons",
        link: "Featured Persons",
        icon: <FaPersonCircleCheck />
    },
    {
        id: 7,
        path: "add-featured-person",
        link: "Add Featured Person",
        icon: <FaPersonCirclePlus />
    },
    {
        id: 8,
        path: "settings",
        link: "Settings",
        icon: <FaGear />
    },
    {
        id: 9,
        path: "sign-out",
        link: "Sign out",
        icon: <FaSignOutAlt />
    },
]