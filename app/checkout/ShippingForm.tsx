declare global {
    interface Window {
      daum: any;
    }
  }

  export default function ShippingForm({
    customer,
    setCustomer,
    hasPhysicalItem,
  }: any) {
  
    const input =
      "w-full border border-[#D8C7BD] rounded-xl p-4";

      const openPostcode = () => {

        new window.daum.Postcode({
      
          oncomplete: function (data: any) {
      
            setCustomer((prev: any) => ({
              ...prev,
              zipcode: data.zonecode,
              address: data.address,
            }));
      
          },
      
        }).open();
      
      };
  
    if (!hasPhysicalItem) {
  
      return (
  
        <section>
  
          <h2 className="text-2xl font-light">
            Digital Delivery
          </h2>
  
          <div className="mt-10 space-y-6">
  
            <div>
  
              <p className="mb-2">
                Name
              </p>
  
              <input
                className={input}
                value={customer.name}
                onChange={(e)=>
                  setCustomer({
                    ...customer,
                    name:e.target.value,
                  })
                }
              />
  
            </div>
  
            <div>
  
              <p className="mb-2">
                Email
              </p>
  
              <input
                className={input}
                value={customer.email}
                onChange={(e)=>
                  setCustomer({
                    ...customer,
                    email:e.target.value,
                  })
                }
              />
  
            </div>
  
            <label className="flex items-center gap-3">
  
              <input
                type="checkbox"
                checked={customer.newsletter}
                onChange={(e)=>
                  setCustomer({
                    ...customer,
                    newsletter:e.target.checked,
                  })
                }
              />
  
              <span className="text-sm text-[#8A7A72]">
                I'd like to receive updates about new collections and releases.
              </span>
  
            </label>
  
            <p className="text-sm text-[#8A7A72] italic">
            Your digital collection will be sent as a ZIP archive immediately after payment.
            </p>
  
          </div>
  
        </section>
  
      );
  
    }
  
    // ↓↓↓ 여기부터 기존 ShippingForm 코드 그대로 ↓↓↓
    return (
  
      <section>
  
        <h2 className="text-2xl font-light">
          Shipping Information
        </h2>
  
        <div className="mt-10 space-y-6">
  
          {[
            ["Recipient Name", "name"],
            ["Email", "email"],
            ["Phone", "phone"],
          ].map(([label, key]) => (
  
            <div key={key}>
  
              <p className="mb-2">
                {label}
              </p>
  
              <input
                className={input}
                value={customer[key]}
                onChange={(e)=>
                  setCustomer({
                    ...customer,
                    [key]:e.target.value,
                  })
                }
              />
  
            </div>
  
          ))} </div>
            <div>

            <p className="mb-2">
            Postal Code
            </p>

            <div className="flex gap-3">

            <input
                className={input}
                value={customer.zipcode}
                readOnly
            />

            <button
                type="button"
                onClick={openPostcode}
                className="
                px-6
                rounded-xl
                border
                border-[#D8C7BD]
                hover:bg-black
                hover:text-white
                transition
                "
            >
                Search
            </button>

            </div>

            </div>

            <div>

            <p className="mb-2">
                Address
            </p>

            <input
                className={input}
                value={customer.address}
                readOnly
            />


            <div>

            <p className="mb-2">
                Detail Address
            </p>

            <input
                className={input}
                value={customer.detailAddress}
                onChange={(e)=>
                setCustomer({
                    ...customer,
                    detailAddress:e.target.value,
                })
                }
            />

            </div>
          <div>
            <p className="mb-2">
              Delivery Memo
            </p>
  
            <textarea
              rows={4}
              className={input}
              value={customer.memo}
              onChange={(e)=>
                setCustomer({
                  ...customer,
                  memo:e.target.value,
                })
              }
            />
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  }