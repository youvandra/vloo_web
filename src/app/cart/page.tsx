"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Trash, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";

type CartItem = {
  variant: "black" | "blue";
  cardType: "Personal" | "Gift" | "Business";
  price: number;
  qty?: number;
};

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const data = JSON.parse(localStorage.getItem("cartItems") || "[]");
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });
  const total = items.reduce((sum, it) => sum + (it.price || 0) * (it.qty ?? 1), 0);

  useEffect(() => {
    const onUpdated = () => {
      try {
        const data = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setItems(Array.isArray(data) ? data : []);
      } catch {
        setItems([]);
      }
    };
    window.addEventListener("cart:updated", onUpdated as EventListener);
    window.addEventListener("storage", onUpdated as EventListener);
    return () => {
      window.removeEventListener("cart:updated", onUpdated as EventListener);
      window.removeEventListener("storage", onUpdated as EventListener);
    };
  }, []);

  return (
    <main className="w-full bg-white text-black min-h-screen">
      <Navbar />
      <section data-theme="light" className="w-full min-h-screen flex items-start justify-center pt-32 md:pt-36 pb-20 px-4 md:px-8 2xl:px-16">
        <div className="w-full max-w-6xl 2xl:max-w-screen-2xl 3xl:max-w-[90vw]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10">
            <h1 className="font-display text-4xl md:text-6xl 2xl:text-7xl font-black tracking-tighter">Your Cart</h1>
            <Button
              asChild
              className="rounded-full bg-black text-white hover:bg-gray-900 px-6 py-3 font-bold w-full md:w-auto"
            >
              <Link href="/buy-card" className="flex items-center justify-center gap-2">
                <Plus className="h-4 w-4" />
                {items.length === 0 ? "Buy Card" : "Buy More Card"}
              </Link>
            </Button>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border border-black/10 p-6 md:p-8 text-gray-600">
              <div>Your cart is empty.</div>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block rounded-2xl border border-black/10 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-black/5">
                    <tr>
                      <th className="px-4 py-3 font-sans text-xs text-gray-600">Product</th>
                      <th className="px-4 py-3 font-sans text-xs text-gray-600">Unit Price</th>
                      <th className="px-4 py-3 font-sans text-xs text-gray-600">Quantity</th>
                      <th className="px-4 py-3 font-sans text-xs text-gray-600">Subtotal</th>
                      <th className="px-4 py-3 font-sans text-xs text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((it, idx) => (
                      <tr key={idx} className="border-t border-black/10">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-8 w-8 rounded-full border ${
                                it.variant === "blue"
                                  ? "bg-[#0b1cc4] border-black/10"
                                  : "bg-black border-black/10"
                              }`}
                              aria-hidden
                            />
                            <div className="flex flex-col">
                              <span className="font-display text-base font-bold">{it.cardType} Card</span>
                              <span className="text-xs text-gray-500">Physical Card</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="font-display text-base font-black tracking-tight">${it.price}</span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                const next = items.map((x, i) =>
                                  i === idx ? { ...x, qty: Math.max(1, (x.qty ?? 1) - 1) } : x
                                );
                                setItems(next);
                                localStorage.setItem("cartItems", JSON.stringify(next));
                                window.dispatchEvent(new Event("cart:updated"));
                              }}
                              className="px-3 py-2 rounded-lg border border-black/10 text-sm hover:bg-black/5"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min={1}
                              value={it.qty ?? 1}
                              onChange={(e) => {
                                const val = Math.max(1, parseInt(e.target.value || "1", 10));
                                const next = items.map((x, i) => (i === idx ? { ...x, qty: val } : x));
                                setItems(next);
                                localStorage.setItem("cartItems", JSON.stringify(next));
                                window.dispatchEvent(new Event("cart:updated"));
                              }}
                              className="w-16 px-3 py-2 rounded-lg border border-black/10 text-sm text-center"
                              aria-label="Quantity"
                            />
                            <button
                              onClick={() => {
                                const next = items.map((x, i) =>
                                  i === idx ? { ...x, qty: (x.qty ?? 1) + 1 } : x
                                );
                                setItems(next);
                                localStorage.setItem("cartItems", JSON.stringify(next));
                                window.dispatchEvent(new Event("cart:updated"));
                              }}
                              className="px-3 py-2 rounded-lg border border-black/10 text-sm hover:bg-black/5"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="font-display text-base font-black tracking-tight">
                            ${it.price * (it.qty ?? 1)}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <button
                            onClick={() => {
                              const next = items.filter((_, i) => i !== idx);
                              setItems(next);
                              localStorage.setItem("cartItems", JSON.stringify(next));
                              window.dispatchEvent(new Event("cart:updated"));
                            }}
                            className="px-3 py-2 rounded-lg border border-black/10 text-sm flex items-center gap-2 hover:bg-red-50 text-red-600 border-transparent hover:border-red-100"
                            aria-label="Remove item"
                          >
                            <Trash className="h-4 w-4" />
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile List */}
              <div className="md:hidden space-y-4">
                {items.map((it, idx) => (
                  <div key={idx} className="rounded-2xl border border-black/10 p-5 space-y-4 bg-gray-50/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-10 w-10 rounded-full border ${
                            it.variant === "blue"
                              ? "bg-[#0b1cc4] border-black/10"
                              : "bg-black border-black/10"
                          }`}
                          aria-hidden
                        />
                        <div className="flex flex-col">
                          <span className="font-display text-lg font-bold">{it.cardType} Card</span>
                          <span className="text-xs text-gray-500">Physical Card</span>
                        </div>
                      </div>
                      <span className="font-display text-lg font-black tracking-tight">${it.price}</span>
                    </div>

                    <div className="flex items-center justify-between bg-white rounded-xl border border-black/5 p-3">
                      <span className="text-sm font-medium text-gray-600">Quantity</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const next = items.map((x, i) =>
                              i === idx ? { ...x, qty: Math.max(1, (x.qty ?? 1) - 1) } : x
                            );
                            setItems(next);
                            localStorage.setItem("cartItems", JSON.stringify(next));
                            window.dispatchEvent(new Event("cart:updated"));
                          }}
                          className="h-8 w-8 flex items-center justify-center rounded-lg border border-black/10 text-sm hover:bg-black/5 bg-white"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min={1}
                          value={it.qty ?? 1}
                          onChange={(e) => {
                            const val = Math.max(1, parseInt(e.target.value || "1", 10));
                            const next = items.map((x, i) => (i === idx ? { ...x, qty: val } : x));
                            setItems(next);
                            localStorage.setItem("cartItems", JSON.stringify(next));
                            window.dispatchEvent(new Event("cart:updated"));
                          }}
                          className="w-12 h-8 rounded-lg border border-black/10 text-sm text-center bg-white"
                          aria-label="Quantity"
                        />
                        <button
                          onClick={() => {
                            const next = items.map((x, i) =>
                              i === idx ? { ...x, qty: (x.qty ?? 1) + 1 } : x
                            );
                            setItems(next);
                            localStorage.setItem("cartItems", JSON.stringify(next));
                            window.dispatchEvent(new Event("cart:updated"));
                          }}
                          className="h-8 w-8 flex items-center justify-center rounded-lg border border-black/10 text-sm hover:bg-black/5 bg-white"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-black/10">
                      <div className="flex flex-col">
                         <span className="text-xs text-gray-500">Subtotal</span>
                         <span className="font-display text-xl font-black tracking-tight">
                            ${it.price * (it.qty ?? 1)}
                         </span>
                      </div>
                      <button
                        onClick={() => {
                          const next = items.filter((_, i) => i !== idx);
                          setItems(next);
                          localStorage.setItem("cartItems", JSON.stringify(next));
                          window.dispatchEvent(new Event("cart:updated"));
                        }}
                        className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium flex items-center gap-2 hover:bg-red-100"
                        aria-label="Remove item"
                      >
                        <Trash className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-black/10 p-6 flex items-center justify-between">
                <div className="text-lg text-gray-600">Total</div>
                <div className="font-display text-3xl font-black tracking-tight">${total}</div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="rounded-full bg-black text-white hover:bg-gray-900 px-8 py-4 font-bold w-full md:w-auto flex items-center justify-center gap-2">
                  Checkout
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
