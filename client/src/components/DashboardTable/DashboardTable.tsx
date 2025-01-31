import NestedTable from "../ui/NestedTable/NestedTable";
import NestedTableRow from "../ui/NestedTableRow/NestedTableRow";

import { Company, Channel, Employee, Branch } from "../../types/data";
import Person from '../Person/Person';

interface DashboardTableProps {
	company: Company;
	labels: string[]
}

export default function DashboardTable({ company, labels }: DashboardTableProps) {
	/* renderChannel, renderBranch and renderCompany
	   could be combined to a single function,
	   but renderEmployee has different label assembly,
	   so I decided to separate all renders to keep the code flexible
	*/
	function renderChannel(channel: Channel, nestingLevel: number = 0) {
		return (
			<NestedTableRow
				id={channel.id}
				label={channel.name}
				values={channel.values}
				nestingLevel={nestingLevel}
			/>
		)
	}

	function renderEmployee(employee: Employee, nestingLevel: number = 0) {
		return (
			<NestedTableRow
				id={employee.id}
				label={<Person id={employee.id} name={employee.name} />}
				values={employee.values}
				nestingLevel={nestingLevel}
			>
				{employee.channels && employee.channels.map(
					channel => renderChannel(channel, nestingLevel + 1)
				)}
			</NestedTableRow>
		)
	}

	function renderBranch(branch: Branch, nestingLevel: number = 0) {
		return (
			<NestedTableRow
				id={branch.id}
				label={branch.name}
				values={branch.values}
				nestingLevel={nestingLevel}
			>
				{branch.employees && branch.employees.map(
					employee => renderEmployee(employee, nestingLevel + 1)
				)}
			</NestedTableRow>
		)
	}

	function renderCompany(company: Company, nestingLevel: number = 0) {
		return (
			<NestedTableRow
				id={company.id}
				label={company.name}
				values={company.values}
				nestingLevel={nestingLevel}
			>
				{company.branches && company.branches.map(
					branch => renderBranch(branch, nestingLevel + 1)
				)}
			</NestedTableRow>
		)
	}

	return (company &&
		<NestedTable columnsLabels={labels}>
			{renderCompany(company)}
		</NestedTable>
   )
}
