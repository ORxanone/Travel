import React from "react";
import { Box, CardBody, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { DollarSign, BarChart3, Tag } from "lucide-react";

const FilterItem = ({ label, value }: { label: string; value: object }) => (
  <Box
    as="button"
    w="full"
    textAlign="left"
    px={4}
    py={2}
    rounded="md"
    _hover={{ bg: "gray.100" }}
    _active={{ bg: "gray.200" }}
  >
    <Text>{label}</Text>
  </Box>
);

const FilterList = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <VStack align="stretch" spacing={3} mt={4}>
    <Heading size="sm" display="flex" alignItems="center" gap={2}>
      {icon} {label}
    </Heading>
    {children}
  </VStack>
);

const Aside = () => {
  return (
    <Card.Root
      display={{ base: "none", md: "block" }}
      order={-1}
      w="15em"
      mr={4}
      alignSelf="flex-start"
      boxShadow="md"
    >
      <CardBody>
        <Input
          placeholder="Search..."
          mb={4}
          borderRadius="md"
          size="sm"
          borderColor="blue.400"
        />

        {/* Sales Filters */}
        <FilterList label="Sales Filters" icon={<DollarSign size={16} />}>
          <FilterItem label="Best Sellers" value={{ sales_gt: 25 }} />
          <FilterItem
            label="Average Sellers"
            value={{ sales_lte: 25, sales_gt: 10 }}
          />
          <FilterItem
            label="Low Sellers"
            value={{ sales_lte: 10, sales_gt: 0 }}
          />
          <FilterItem label="Never Sold" value={{ sales: 0 }} />
        </FilterList>

        {/* Stock Filters */}
        <FilterList label="Stock Filters" icon={<BarChart3 size={16} />}>
          <FilterItem label="No Stock" value={{ stock: 0 }} />
          <FilterItem label="Low Stock" value={{ stock_lt: 10, stock_gt: 0 }} />
          <FilterItem
            label="Average Stock"
            value={{ stock_lt: 50, stock_gt: 9 }}
          />
          <FilterItem label="Enough Stock" value={{ stock_gt: 49 }} />
        </FilterList>

        {/* Categories Filters */}
        <FilterList
          label="Categories"
          icon={<Tag size={16} />}
          children={undefined}
        >
          {/* Dinamik kateqoriyalar burada yer alacaq */}
        </FilterList>
      </CardBody>
    </Card.Root>
  );
};

export default Aside;
