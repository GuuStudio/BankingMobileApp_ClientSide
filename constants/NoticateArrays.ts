

interface INotifi {
    id: number,
    date: string,
    title: string,
    description: string,
    time: string,
    category: string
}

export const notifications: INotifi[] = [
    {
        id: 1,
        date: "2024-09-01",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 1.000.000 VND từ NVA đến tài khoản của bạn. Giao dịch thành công. Vui lòng kiểm tra số dư.",
        time: "10:00 AM",
        category: "Deposit"
    },
    {
        id: 2,
        date: "2024-09-02",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 500.000 VND đã được rút khỏi tài khoản của bạn. Xin vui lòng giữ biên lai giao dịch.",
        time: "2:00 PM",
        category: "Withdrawal"
    },
    {
        id: 3,
        date: "2024-09-03",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 200.000 VND đã được chuyển từ tài khoản của bạn đến TK 123456789. Vui lòng kiểm tra trạng thái giao dịch.",
        time: "11:30 AM",
        category: "Transfer"
    },
    {
        id: 4,
        date: "2024-09-04",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 1.500.000 VND đã được nhận từ TK 987654321 vào tài khoản của bạn. Giao dịch thành công.",
        time: "9:00 AM",
        category: "Deposit"
    },
    {
        id: 5,
        date: "2024-09-05",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | Phí dịch vụ hàng tháng đã được trừ 50.000 VND. Vui lòng kiểm tra thông tin chi tiết.",
        time: "12:00 PM",
        category: "Fee"
    },
    {
        id: 6,
        date: "2024-09-06",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 2.000.000 VND từ NVA đến tài khoản của bạn. Giao dịch đã được thực hiện thành công.",
        time: "3:00 PM",
        category: "Deposit"
    },
    {
        id: 7,
        date: "2024-09-07",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 1.000.000 VND đã được rút khỏi tài khoản của bạn. Vui lòng giữ biên lai.",
        time: "1:00 PM",
        category: "Withdrawal"
    },
    {
        id: 8,
        date: "2024-09-08",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 300.000 VND đã được chuyển từ tài khoản của bạn tới TK 456789123. Vui lòng kiểm tra trạng thái.",
        time: "4:30 PM",
        category: "Transfer"
    },
    {
        id: 9,
        date: "2024-09-09",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 800.000 VND đã được nhận từ TK 321654987 vào tài khoản của bạn. Giao dịch thành công.",
        time: "10:15 AM",
        category: "Deposit"
    },
    {
        id: 10,
        date: "2024-09-10",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | Phí dịch vụ hàng tháng đã được trừ 50.000 VND. Vui lòng kiểm tra tài khoản.",
        time: "12:30 PM",
        category: "Fee"
    },
    {
        id: 11,
        date: "2024-09-11",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 500.000 VND từ NVA đến tài khoản của bạn. Vui lòng kiểm tra số dư.",
        time: "9:45 AM",
        category: "Deposit"
    },
    {
        id: 12,
        date: "2024-09-12",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 300.000 VND đã được rút khỏi tài khoản của bạn. Vui lòng giữ biên lai giao dịch.",
        time: "2:15 PM",
        category: "Withdrawal"
    },
    {
        id: 13,
        date: "2024-09-13",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 150.000 VND đã được chuyển từ tài khoản của bạn tới TK 789456123. Vui lòng kiểm tra trạng thái giao dịch.",
        time: "11:00 AM",
        category: "Transfer"
    },
    {
        id: 14,
        date: "2024-09-14",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 1.200.000 VND đã được nhận từ TK 654321987 vào tài khoản của bạn. Giao dịch thành công.",
        time: "9:30 AM",
        category: "Deposit"
    },
    {
        id: 15,
        date: "2024-09-15",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | Phí dịch vụ hàng tháng đã được trừ 50.000 VND. Vui lòng kiểm tra thông tin chi tiết.",
        time: "1:00 PM",
        category: "Fee"
    },
    {
        id: 16,
        date: "2024-09-16",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 3.000.000 VND từ NVA đến tài khoản của bạn. Giao dịch đã thực hiện thành công.",
        time: "3:45 PM",
        category: "Deposit"
    },
    {
        id: 17,
        date: "2024-09-17",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 750.000 VND đã được rút khỏi tài khoản của bạn. Vui lòng giữ biên lai giao dịch.",
        time: "12:00 PM",
        category: "Withdrawal"
    },
    {
        id: 18,
        date: "2024-09-18",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 500.000 VND đã được chuyển từ tài khoản của bạn tới TK 258963147. Vui lòng kiểm tra trạng thái giao dịch.",
        time: "2:45 PM",
        category: "Transfer"
    },
    {
        id: 19,
        date: "2024-09-19",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | GĐ: 600.000 VND đã được nhận từ TK 147258369 vào tài khoản của bạn. Giao dịch thành công.",
        time: "10:30 AM",
        category: "Deposit"
    },
    {
        id: 20,
        date: "2024-09-20",
        title: "Thông báo biến động số dư",
        description: "TK 21421412421 | Phí dịch vụ hàng tháng đã được trừ 50.000 VND. Vui lòng kiểm tra tài khoản của bạn.",
        time: "12:15 PM",
        category: "Fee"
    }
];