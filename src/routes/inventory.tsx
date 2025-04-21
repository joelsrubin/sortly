import { createFileRoute } from '@tanstack/react-router';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import AddItemModal from '@/components/AddItemModal';
export const Route = createFileRoute('/inventory')({
  component: Inventory,
});

function Inventory() {
  const headers = ['Name', 'Category', 'Price', 'Last Updated'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([
    {
      name: 'PVC Pipe (10ft)',
      category: 'Pipes',
      price: '12.99',
      completedAt: '2024-03-20',
    },
    {
      name: 'Copper Elbow Joint',
      category: 'Fittings',
      price: '4.50',
      completedAt: '2024-03-19',
    },
    {
      name: 'Bathroom Faucet',
      category: 'Fixtures',
      price: '89.99',
      completedAt: '2024-03-18',
    },
    {
      name: 'Toilet Flange',
      category: 'Parts',
      price: '15.75',
      completedAt: '2024-03-17',
    },
    {
      name: 'Pipe Wrench',
      category: 'Tools',
      price: '24.99',
      completedAt: '2024-03-16',
    },
    {
      name: 'Drain Snake',
      category: 'Tools',
      price: '32.50',
      completedAt: '2024-03-15',
    },
    {
      name: 'Shower Head',
      category: 'Fixtures',
      price: '45.99',
      completedAt: '2024-03-14',
    },
    {
      name: 'Water Heater Element',
      category: 'Parts',
      price: '18.25',
      completedAt: '2024-03-13',
    },
  ]);

  return (
    <>
      <div className="py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Inventory
          </h1>

          <Button
            variant="outline"
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
                  <TableCell className="font-medium">{`$${row.price}`}</TableCell>
                  <TableCell className="text-right">
                    {row.completedAt}
                  </TableCell>
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
