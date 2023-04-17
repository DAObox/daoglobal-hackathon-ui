export interface NavItemsType {
    id: string;
    title: string;
    href: string;
}

export interface ButtonType {
    text: string;
    clickFunction: () => void
}

export interface MemberCardTypes {
    avatar: string,
    address: string,
    balance: string,
    power: string
}