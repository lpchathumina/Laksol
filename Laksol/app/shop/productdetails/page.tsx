'use client';

import React, { useMemo, Suspense } from 'react';
import { useSearchParams, notFound } from 'next/navigation';
import ProductDetails from '@/components/layout/productdetails';
import { allProducts as products } from '../product-data';

function ProductDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const product = useMemo(() => {
    if (!id) return null;
    return products.find(p => p.id === Number(id));
  }, [id]);

  if (!product) {
    if (id) return notFound();
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#0061d4] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Loading Product Details...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <ProductDetails product={product} />
      </div>
    </main>
  );
}

export default function ProductDetailsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#0061d4] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Loading...</p>
        </div>
      </div>
    }>
      <ProductDetailsContent />
    </Suspense>
  );
}
