import React, {useEffect, useState} from 'react'

import DashboardTable from "../../components/DashboardTable/DashboardTable";
import DashboardGraph from '../../components/DashboardGraph/DashboardGraph';

import {Company} from '../../types/data';

const COMPANY_ID = "d6e00056-dce4-4ef4-b034-d6467db6187d"

export default function IndexPage() {
	const [company, setCompany] = useState<Company | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

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
				{company && <DashboardGraph company={company} />}
			</div>

			<div className="Page_card">
				{company && <DashboardTable company={company} />}
			</div>
		</div>
	)
}
