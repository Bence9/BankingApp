export interface UserDTO{
    id: number;
    customerId: string;
    name: string;
    address: string;
    phone: string;
    idCard: string;
}

export interface BankTransferDTO{
    id: number;
    timestamp: string;
    amount: number;
    source: UserDTO | null;
    destination: UserDTO | null;
}