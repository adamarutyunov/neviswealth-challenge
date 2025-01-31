import React, { useEffect, useMemo, useState } from 'react'

import DashboardTable from '../../components/DashboardTable/DashboardTable'
import DashboardGraph from '../../components/DashboardGraph/DashboardGraph'

import { Company } from '../../types/data'
import { createMonths, getMonthLabel } from '../../utils/date'

const COMPANY_ID: string = 'd6e00056-dce4-4ef4-b034-d6467db6187d'

export default function IndexPage() {
    const [company, setCompany] = useState<Company | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    // Implying we are getting these from a date range selector
    const START_DATE: Date = new Date('2024-02-01')
    const MONTHS_COUNT: number = 12

    const months: Date[] = useMemo(() => createMonths(START_DATE, MONTHS_COUNT), [START_DATE])
    const monthsLabels: string[] = useMemo(() => months.map(getMonthLabel), [months])

    const fetchData = () => {
        setLoading(true)

        fetch(`http://localhost:4000/companies/${COMPANY_ID}`)
            .then(response => response.json()).then(data => {
                setCompany(data as Company)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="Page">
            <h1>Clients</h1>

            <div className="Page_card">
                {company && <DashboardGraph company={company} labels={monthsLabels} />}
            </div>

            <div className="Page_card">
                {company && <DashboardTable company={company} labels={monthsLabels} />}
            </div>
        </div>
    )
}
