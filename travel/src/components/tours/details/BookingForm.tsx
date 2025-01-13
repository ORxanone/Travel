
'use client';
import { Input } from '@chakra-ui/react/input';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Field } from '~/components/ui/field';
import IncrementInput from './IncrementInput';
import BookingFormTitle from './BookingFormTitle';

interface BookingFormProps {
  basePrice?: number;
}
const BookingForm = ({ basePrice = 104 }: BookingFormProps) => {
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const total = (adults + kids) * basePrice || basePrice;
  return (
    <div className="w-80 bg-white rounded-lg p-6 shadow-lg">
      <BookingFormTitle basePrice={basePrice} />
      <div className="space-y-4">
        <Field label="Date">
          <Input className='border px-3' placeholder="" type='date' />
        </Field>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Ticket</label>
          <IncrementInput item={adults} setItem={setAdults} title={"Adults (18+ years)"} />
          <IncrementInput item={kids} setItem={setKids} title={"Kids (3+ years)"} />
        </div>
        <Button className='w-full bg-red-500 text-white'>Book now</Button>
      </div>
    </div>
  );
};

export default BookingForm;