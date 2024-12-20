import { Card } from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { lusi } from "../ui/font";
import { fetchRevenue, fetchLatestInvoices,fetchCardData } from '@/app/lib/data';

export default async function Page()
{
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();

    const {totalPaidInvoices,totalPendingInvoices,numberOfInvoices,numberOfCustomers} = await fetchCardData();


    return(
        <main>
        <div  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {<Card title="Collected" type="collected" value={totalPaidInvoices}/>}
        {<Card title="Pending" type="pending" value={totalPendingInvoices}/>}
        {<Card title="Total Invoices" type="invoices" value={numberOfInvoices}/>}
        {<Card title="Total Customers" type="customers" value={numberOfCustomers}/>}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {<RevenueChart revenue={revenue}/>}
        {<LatestInvoices latestInvoices={latestInvoices}/>}
        </div>
        </main>
    );
}