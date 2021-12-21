export default class Student {
  firstName: string
  desc: string
  cds: CD[]

  constructor(params: StudentParams) {
    this.firstName = params.firstName
    this.desc = params.desc
    this.cds = params.cds
  }
}

interface StudentParams {
  firstName: string
  desc: string
  cds: CD[]
}

interface CD {
  name: string
  color: string
  link: string
}
