
export  interface Iproduct{
    
        pname: string;
        pdetails: string;
        pstatus: Productst;
        id: string;
    
}

export enum Productst{
    inProgress="in Progress",
    Dispatched="dispatched",
    Deleveried= "delevered"

}