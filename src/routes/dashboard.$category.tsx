import AddItemModal from '@/components/AddItemModal';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHead,
  TableCaption,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/dashboard/$category')({
  component: CategoryPage,
});

function CategoryPage() {
  const headers = ['Name', 'Category', 'Price'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([
    {
      name: 'PVC Pipe (10ft)',
      category: 'pipes',
      price: '12.99',
    },
    {
      name: 'Copper Elbow Joint',
      category: 'fittings',
      price: '4.50',
    },
    {
      name: 'Bathroom Faucet',
      category: 'fixtures',
      price: '89.99',
    },
    {
      name: 'Toilet Flange',
      category: 'parts',
      price: '15.75',
    },
    {
      name: 'Pipe Wrench',
      category: 'tools',
      price: '24.99',
    },
    {
      name: 'Drain Snake',
      category: 'tools',
      price: '32.50',
    },
    {
      name: 'Shower Head',
      category: 'fixtures',
      price: '45.99',
    },
    {
      name: 'Water Heater Element',
      category: 'parts',
      price: '18.25',
    },
  ]);

  return (
    <>
      <Link to="/dashboard" className="cursor-pointer">
        <Button variant="outline" className="cursor-pointer">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="py-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Inventory
            </h1>
          </div>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Add Item ➕
          </Button>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <Table>
            <TableCaption>
              A list of plumbing supplies and their current prices.
            </TableCaption>
            <TableHeader>
              <TableRow>
                {headers.map((header, index) => (
                  <TableHead
                    key={index}
                    className="first:w-[200px] last:text-right"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell className="font-medium text-right">{`$${row.price}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(item) => {
          setData([item, ...data]);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
