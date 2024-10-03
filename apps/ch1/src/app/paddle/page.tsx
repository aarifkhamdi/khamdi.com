'use client';

import { initializePaddle, Paddle } from '@paddle/paddle-js';
import { useEffect, useState } from 'react';

export default function Page(args: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { searchParams } = args;

  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    async function f() {
      const paddleInstance = await initializePaddle({
        environment: 'sandbox',
        token: 'test_ef097305fa1f0103cf9f0453dc1',
      });

      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    }
    f();
  }, []);

  const transactionId = searchParams['_ptxn'];
  if (typeof transactionId === 'string') {
    paddle?.Checkout.open({
      transactionId,
      settings: {
        allowLogout: false,
      },
      customer: {
        address: {
          countryCode: 'UK',
        },
        email: 'aarifkhamdi@gmail.com',
      },
    });
  }
}
