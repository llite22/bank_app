export enum AppRoutes {
    Login = "login",
    // Registration = "registration",
    Dashboard = "dashboard",
    // Transactions = "transactions",
    // Accounts = "accounts",
    // Investments = "investments",
    // CreditCards = "creditcards",
    // Loans = "loans",
    // Services = "services",
    // MyPrivileges = "myprivileges",
    // Setting = "setting",

    Not_Found = "not_found",
}

export const getRouteLogin = () => '/login'
export const getRouteRegistration = () => '/registration'
export const getRouteDashboard = () => '/'
export const getRouteTransactions = () => '/transactions'
export const getRouteAccounts = () => `/accounts`
export const getRouteInvestments = () => '/investments'
export const getRouteCreditCards = () => `/creditcards`
export const getRouteLoans = () => '/loans'
export const getRouteServices = () => `/services`
export const getRouteMyPrivileges = () => '/myprivileges'
export const getRouteSetting = () => '/setting'