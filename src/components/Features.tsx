import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const Features = () => {
  const headers = ['Name', 'Category', 'Status', 'Last Updated'];
  const rows = [
    {
      name: 'Task Management',
      category: 'Organization',
      status: 'Active',
      'last updated': '2024-03-20',
    },
    {
      name: 'Calendar Integration',
      category: 'Productivity',
      status: 'In Progress',
      'last updated': '2024-03-19',
    },
    {
      name: 'Data Backup',
      category: 'Security',
      status: 'Completed',
      'last updated': '2024-03-18',
    },
  ];

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Features
        </h1>
        <button className="bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors flex items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Add Feature</span>
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {/* if first child give class w-[100px] if last child give class text-right */}
              {headers.map((header, index) => (
                <TableHead
                  key={index}
                  className="first:w-[100px] last:text-right"
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* if first child give class font-medium if last child give class text-right */}
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell key={index} className="font-medium">
                  {row.name}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell className="text-right">
                  {row['last updated']}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Features;
