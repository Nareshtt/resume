"use client";

import { CheckCircle, Package, Truck, Home, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { clearCart } from "../../../store/slices/cartSlice";

const steps = [
  { icon: CheckCircle, label: "Order Confirmed", desc: "We've received your order", delay: 500 },
  { icon: Package, label: "Processing", desc: "We're preparing your items", delay: 1500 },
  { icon: Truck, label: "On the Way", desc: "Your order is being shipped", delay: 2500 },
  { icon: Home, label: "Delivered", desc: "Arriving at your doorstep", delay: 3500 },
];

export default function CheckoutSuccessPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());

    const timers = steps.map((step, index) => {
      return setTimeout(() => {
        setCurrentStep(index + 1);
      }, step.delay);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [dispatch]);

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-light-200">
      <div className="w-full max-w-4xl bg-light-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8 sm:p-12 text-center border-b border-light-300">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6 animate-in zoom-in duration-500">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-heading-2 text-dark-900 mb-4">Order Successful!</h1>
          <p className="text-lead text-dark-700 max-w-lg mx-auto">
            Thank you for your purchase. Your order #849230 has been confirmed and will be shipped shortly.
          </p>
        </div>

        <div className="p-8 sm:p-12 bg-light-100">
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:flex justify-between items-start relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index < currentStep;
                const isCompleted = index < currentStep - 1;

                return (
                  <div key={step.label} className="flex flex-col items-center text-center w-1/4 relative group">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-700 z-20 ${
                        isActive
                          ? "border-dark-900 bg-dark-900 text-light-100 shadow-lg scale-110"
                          : "border-light-300 bg-light-100 text-light-400"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className={`mt-6 transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-50 translate-y-2"}`}>
                      <h3 className={`text-body-medium font-bold ${isActive ? "text-dark-900" : "text-dark-500"}`}>
                        {step.label}
                      </h3>
                      <p className="text-caption text-dark-700 mt-1 max-w-[120px] mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-7 left-0 w-full h-0.5 bg-light-300 -z-0">
               <div
                 className="h-full bg-dark-900 transition-all duration-1000 ease-out"
                 style={{ width: `${Math.max(0, Math.min(100, ((currentStep - 1) / (steps.length - 1)) * 100))}%` }}
               />
            </div>

            {/* Mobile Timeline (Vertical) */}
            <div className="md:hidden space-y-8 relative">
              <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-light-300 -z-10" />
              <div
                 className="absolute left-7 top-2 w-0.5 bg-dark-900 -z-10 transition-all duration-1000 ease-out"
                 style={{ height: `${Math.max(0, Math.min(100, ((currentStep - 1) / (steps.length - 1)) * 100))}%` }}
              />

              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index < currentStep;

                return (
                  <div key={step.label} className="flex items-center gap-6 relative">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 z-20 ${
                        isActive
                          ? "border-dark-900 bg-dark-900 text-light-100 shadow-md"
                          : "border-light-300 bg-light-100 text-light-400"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className={`transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-50 -translate-x-2"}`}>
                      <h3 className={`text-body-medium font-bold ${isActive ? "text-dark-900" : "text-dark-500"}`}>
                        {step.label}
                      </h3>
                      <p className="text-caption text-dark-700">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-light-200 p-8 text-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-dark-900 px-8 py-4 text-body-medium text-light-100 transition hover:opacity-90"
          >
            Continue Shopping
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
