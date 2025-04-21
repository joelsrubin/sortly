import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import {
  Layers,
  ShoppingCart,
  Users,
  Settings,
  BarChart,
  FileText,
  LinkIcon,
} from 'lucide-react';

// Sample categories data - replace with your actual data
const categories = [
  {
    id: 'inventory',
    name: 'Inventory',
    description: 'Manage stock levels and suppliers',
    url: '/inventory',
    icon: Layers,
    disabled: false,
  },
  {
    id: 'products',
    name: 'Products',
    description: 'Manage your product catalog',
    url: '/products',
    icon: ShoppingCart,
    disabled: true,
  },
  {
    id: 'customers',
    name: 'Customers',
    description: 'View and manage customer information',
    url: '/customers',
    icon: Users,
    disabled: true,
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Track performance and insights',
    url: '/analytics',
    icon: BarChart,
    disabled: true,
  },

  {
    id: 'settings',
    name: 'Settings',
    description: 'Configure system preferences',
    url: '/settings',
    icon: Settings,
    disabled: true,
  },
  {
    id: 'reports',
    name: 'Reports',
    description: 'Generate and view reports',
    url: '/reports',
    icon: FileText,
    disabled: true,
  },
];

export default function CategoryNavigation() {
  return (
    <Card className="w-full max-w-4xl mx-auto dark:bg-gray-800">
      <CardHeader>
        <CardTitle>Dashboard Navigation</CardTitle>
        <CardDescription>Access all categories from one place</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.id}
              to={`/dashboard/$category`}
              disabled={category.disabled}
              params={{ category: category.id }}
              className={`group flex items-start gap-3 rounded-lg border p-3 text-left transition-colors ${
                !category.disabled && 'hover:bg-muted/50'
              } ${category.disabled && 'opacity-50'}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{category.name}</h3>
                  {!category.disabled && (
                    <LinkIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {category.disabled ? 'Coming soon' : category.description}
                </p>
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
