import { Company } from "@/features/company/interfaces/company.inteface"
import { User } from "@/features/user/intefaces/user.interface"

export interface Project {
  _id: string
  name: string
  description: string
  owner: User
  usersTeam: User[]
  client: string
  status: string
  startDate: Date
  endDate: Date
  company: Company
  tasks: string[]
}
