import { getRouteAccounts, getRouteCreditCards, getRouteDashboard, getRouteInvestments, getRouteLoans, getRouteMyPrivileges, getRouteServices, getRouteSetting, getRouteTransactions } from "./router";
import DashBoardIcon from "@/shared/assets/icons/dashboard.svg?react";
import TransactionsIcon from "@/shared/assets/icons/transactions.svg?react";
import AccountsIcon from "@/shared/assets/icons/accounts.svg?react";
import InvestmentsIcon from "@/shared/assets/icons/investments.svg?react";
import CreditCardIcon from "@/shared/assets/icons/credit-card.svg?react";
import LoansIcon from "@/shared/assets/icons/loans.svg?react";
import ServicesIcon from "@/shared/assets/icons/services.svg?react";
import MyPrivilegesIcon from "@/shared/assets/icons/my-privilegies.svg?react";
import SettingIcon from "@/shared/assets/icons/settings.svg?react";

export const sidebarItemsList = [
    {
        path: getRouteDashboard(),
        text: "Dashboard",
        Icon: DashBoardIcon
    },
    {
        path: getRouteTransactions(),
        text: "Transactions",
        Icon: TransactionsIcon
    },
    {
        path: getRouteAccounts(),
        text: "Accounts",
        Icon: AccountsIcon
    },
    {
        path: getRouteInvestments(),
        text: "Investments",
        Icon: InvestmentsIcon
    },
    {
        path: getRouteCreditCards(),
        text: "Credit Cards",
        Icon: CreditCardIcon
    },
    {
        path: getRouteLoans(),
        text: "Loans",
        Icon: LoansIcon
    },
    {
        path: getRouteServices(),
        text: "Services",
        Icon: ServicesIcon
    },
    {
        path: getRouteMyPrivileges(),
        text: "My Privileges",
        Icon: MyPrivilegesIcon
    },
    {
        path: getRouteSetting(),
        text: "Setting",
        Icon: SettingIcon
    },
];