import React, { useCallback, useEffect, useMemo, useState } from 'react'

import DashboardTable from 'src/components/DashboardTable/DashboardTable'
import DashboardGraph from 'src/components/DashboardGraph/DashboardGraph'
import Spinner from 'src/components/ui/Spinner/Spinner'

import { Company } from 'src/types/data'
import { createMonths, getMonthLabel } from 'src/utils/date'

import './IndexPage.scss'

const COMPANY_ID: string = 'd6e00056-dce4-4ef4-b034-d6467db6187d'

export default function IndexPage() {
    const [company, setCompany] = useState<Company | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    // Implying we are getting these from a date range selector
    const START_DATE: Date = new Date('2024-02-01')
    const MONTHS_COUNT: number = 12

    const months: Date[] = useMemo(() => createMonths(START_DATE, MONTHS_COUNT), [START_DATE])
    const monthsLabels: string[] = useMemo(() => months.map(getMonthLabel), [months])

    const fetchData = useCallback(async () => {
        setLoading(true)

        // Artificial delay for more realistic loading
        await new Promise(resolve => setTimeout(resolve, 200))

        try {
            const response = await fetch(`${process.env.BACKEND_URL}/companies/${COMPANY_ID}`)
            const data = await response.json()

            setCompany(data as Company)
        } catch (error) {
            setError('Failed to fetch company data, please try again later')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [COMPANY_ID])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="Page">
            <h1>Clients</h1>

            <div className="Page_card" id="Page_card_graph">
                {loading && <Spinner />}
                {error && <p className="Error">{error}</p>}
                {company && <DashboardGraph company={company} labels={monthsLabels} />}
            </div>

            <div className="Page_card" id="Page_card_table">
                {loading && <Spinner />}
                {error && <p className="Error">{error}</p>}
                {company && <DashboardTable company={company} labels={monthsLabels} />}
            </div>
        </div>
    )
}
