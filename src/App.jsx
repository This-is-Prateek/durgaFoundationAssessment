import SearchBar from "./components/SearchBar.jsx"
import Card from "./components/Card.jsx"

function App() {
  const employees = [         //Sample employee data 
    {
      name: 'Alice Johnson',
      role: 'Software Engineer',
      email: 'alice.johnson@example.com'
    },
    {
      name: 'Bob Smith',
      role: 'Product Manager',
      email: 'bob.smith@example.com'
    },
    {
      name: 'Charlie Brown',
      role: 'UX Designer',
      email: 'charlie.brown@example.com'
    },
    {
      name: 'Dana White',
      role: 'Data Scientist',
      email: 'dana.white@example.com'
    },
    {
      name: 'Eve Black',
      role: 'Quality Assurance',
      email: 'eve.black@example.com'
    },
    {
      name: 'Frank Green',
      role: 'DevOps Engineer',
      email: 'frank.green@example.com'
    },
    {
      name: 'Grace Lee',
      role: 'HR Manager',
      email: 'grace.lee@example.com'
    },
    {
      name: 'Henry Davis',
      role: 'Marketing Specialist',
      email: 'henry.davis@example.com'
    },
    {
      name: 'Ivy Thompson',
      role: 'Sales Executive',
      email: 'ivy.thompson@example.com'
    },
    {
      name: 'Jack Wilson',
      role: 'Support Engineer',
      email: 'jack.wilson@example.com'
    }
  ];

  return (
    <div className="container flex flex-col w-full h-full min-w-full min-h-full gap-14 p-5">
      <nav className="flex flex-col gap-14">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-3">
          <SearchBar />     {/* Search bar component */}
          <div className="flex items-center gap-3 max-sm:order-1">
            <div><img src="profile.svg" alt="profile picture" className="w-10" /></div>
            <div className="flex gap-2">
              <div>Prateek Kumawat</div>
              <img src="arrowDown.svg" alt="arrow down" className="w-5 cursor-pointer hover:bg-gray-300 hover:rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-3">
          <div className="text-2xl font-bold max-sm:order-2">Employees</div>
          <div className="flex gap-10 max-sm:order-1">
            <button className="bg-purple-500 px-2 py-1 w-20 rounded-full hover:bg-pink-400 text-white">All</button>
            <button className="bg-purple-500 px-2 py-1 w-20 rounded-full hover:bg-pink-400 text-white">Active</button>
            <button className="bg-purple-500 px-2 py-1 w-20 rounded-full hover:bg-pink-400 text-white">Inactive</button>
          </div>
        </div>
      </nav>
      <div className="Cards flex flex-wrap gap-10 px-12 max-sm:px-1">
        {employees.map((employee) => (
          <Card name={employee.name} role={employee.role} email={employee.email} />     /* Card component */
        ))}
      </div>
    </div>
  )
}

export default App
