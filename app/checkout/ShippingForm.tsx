// declare global {
//     interface Window {
//       daum: any;
//     }
//   }

//   export default function ShippingForm({
//     customer,
//     setCustomer,
//     hasPhysicalItem,
//   }: any) {
  
//     const input =
//       "w-full border border-[#D8C7BD] rounded-xl p-4";

//       const openPostcode = () => {

//         new window.daum.Postcode({
      
//           oncomplete: function (data: any) {
      
//             setCustomer((prev: any) => ({
//               ...prev,
//               zipcode: data.zonecode,
//               address: data.address,
//             }));
      
//           },
      
//         }).open();
      
//       };
  
//     if (!hasPhysicalItem) {
  
//       return (
  
//         <section>
  
//        <h2 className="text-2xl font-light flex items-end gap-3">

//         <span>
//           다운로드 정보
//         </span>

//         <span className="text-base text-[#8A7A72] font-normal">
//           Digital Delivery
//         </span>

//         </h2>

//         <p className="mt-3 mb-8 text-sm text-[#8A7A72] leading-6">

//         <span className="text-red-500">*</span>

//         표시된 항목은 필수 입력사항입니다.

//         <span className="ml-2 italic">
//           (* Required fields)
//         </span>

//         </p>
  
//           <div className="mt-10 space-y-8">
  
//           <div>

//           <p className="mb-3 font-medium text-[#3A312D]">
//               이름 <span className="text-red-500">*</span>
//             </p>

//             <input
//               className={input}
//               value={customer.name}
//               onChange={(e)=>
//                 setCustomer({
//                   ...customer,
//                   name:e.target.value,
//                 })
//               }
//             />

//             </div>

//             <div>

//             <p className="mb-3 font-medium text-[#3A312D]">
//               휴대전화 <span className="text-red-500">*</span>
//             </p>

//             <input
//               className={input}
//               value={customer.phone}
//               onChange={(e)=>
//                 setCustomer({
//                   ...customer,
//                   phone:e.target.value,
//                 })
//               }
//             />

//             </div>

//             <div>

//             <p className="mb-3 font-medium text-[#3A312D]">
//               이메일 <span className="text-red-500">*</span>
//             </p>

//             <input
//               className={input}
//               value={customer.email}
//               onChange={(e)=>
//                 setCustomer({
//                   ...customer,
//                   email:e.target.value,
//                 })
//               }
//             />

//             </div>
  
//             <label className="flex items-center gap-3">
  
//               <input
//                 type="checkbox"
//                 checked={customer.newsletter}
//                 onChange={(e)=>
//                   setCustomer({
//                     ...customer,
//                     newsletter:e.target.checked,
//                   })
//                 }
//               />
  
//               <span className="text-sm text-[#8A7A72]">

//                 새로운 컬렉션 및 이벤트 소식을
//                 이메일로 받아보겠습니다. (선택)

//               </span>
  
//             </label>
  
//             <p className="text-sm text-[#8A7A72] italic">

//               결제 완료 후
//               입력하신 이메일로
//               ZIP 다운로드 링크가 발송됩니다.

//             </p>
  
//           </div>
  
//         </section>
  
//       );
  
//     }
  
//     // ↓↓↓ 여기부터 기존 ShippingForm 코드 그대로 ↓↓↓
//     return (
  
//       <section>
  
//       <h2 className="text-2xl font-light flex items-end gap-3">

//         <span>
//           배송 정보
//         </span>

//         <span className="text-base text-[#8A7A72] font-normal">
//           Shipping Information
//         </span>

//         </h2>

//         <p className="mt-3 mb-8 text-sm text-[#8A7A72] leading-6">

//         <span className="text-red-500">*</span>

//         표시된 항목은 필수 입력사항입니다.

//         <span className="ml-2 italic">
//           (* Required fields)
//         </span>

//         </p>
  
//         <div className="mt-10 space-y-8">
  
//           {[
//             ["받는 분 이름 *","name"],
//             ["이메일 *","email"],
//             ["휴대전화 *","phone"],
//             ].map(([label, key]) => (
  
//             <div key={key}>
  
//               <p className="mb-3 font-medium text-[#3A312D]">
//                 {label}
//               </p>
  
//               <input
//                 className={input}
//                 value={customer[key]}
//                 onChange={(e)=>
//                   setCustomer({
//                     ...customer,
//                     [key]:e.target.value,
//                   })
//                 }
//               />
  
//             </div>
  
//           ))} </div>
//             <div>

//             <p className="mb-3 font-medium text-[#3A312D]">

//               우편번호
//               <span className="text-red-500 ml-1">*</span>

//               <span className="ml-2 text-sm font-normal text-[#8A7A72]">

//               Postal Code

//               </span>

//               </p>

//             <div className="flex gap-3">

//             <input
//                 className={input}
//                 value={customer.zipcode}
//                 readOnly
//             />

//               <button
//                 type="button"
//                 onClick={openPostcode}
//                 className="
//                   min-w-[110px]
//                   h-[56px]
//                   rounded-xl
//                   border
//                   border-[#D8C7BD]
//                   hover:bg-black
//                   hover:text-white
//                   transition
//                   text-sm
//                   font-medium
//                 "
//               >
//                 주소검색
//               </button>

//             </div>

//             </div>

//             <div>

//             <p className="mb-3 font-medium text-[#3A312D]">

//               주소

//               <span className="text-red-500 ml-1">*</span>

//               <span className="ml-2 text-sm font-normal text-[#8A7A72]">

//               Address

//               </span>

//               </p>

//             <input
//                 className={input}
//                 value={customer.address}
//                 readOnly
//             />


//             <div>

//             <p className="mb-3 font-medium text-[#3A312D]">

//               상세주소

//               <span className="text-red-500 ml-1">*</span>

//               <span className="ml-2 text-sm font-normal text-[#8A7A72]">

//               Detail Address

//               </span>

//               </p>

//             <input
//                 className={input}
//                 value={customer.detailAddress}
//                 onChange={(e)=>
//                 setCustomer({
//                     ...customer,
//                     detailAddress:e.target.value,
//                 })
//                 }
//             />

//             </div>
//           <div>
//           <p className="mb-3 font-medium text-[#3A312D]">

//             배송메모

//             <span className="ml-2 text-sm font-normal text-[#8A7A72]">

//             Delivery Memo

//             </span>

//             </p>
  
//             <textarea
//               rows={3}
//               className={input}
//               value={customer.memo}
//               onChange={(e)=>
//                 setCustomer({
//                   ...customer,
//                   memo:e.target.value,
//                 })
//               }
//             />
  
//           </div>
  
//         </div>
  
//       </section>
  
//     );
  
//   }

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

     <h2 className="text-2xl font-light flex items-end gap-3">

      <span>
        다운로드 정보
      </span>

      <span className="text-base text-[#8A7A72] font-normal">
        Digital Delivery
      </span>

      </h2>

      <p className="mt-3 mb-8 text-sm text-[#8A7A72] leading-6">

      <span className="text-red-500">*</span>

      표시된 항목은 필수 입력사항입니다.

      <span className="ml-2 italic">
        (* Required fields)
      </span>

      </p>

        <div className="mt-10 space-y-8">

        <div className="mb-8">

        <p className="mb-3 font-medium text-[#3A312D]">
            이름 <span className="text-red-500">*</span>
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

          <div className="mb-8">

          <p className="mb-3 font-medium text-[#3A312D]">
            휴대전화 <span className="text-red-500">*</span>
          </p>

          <input
            className={input}
            value={customer.phone}
            onChange={(e)=>
              setCustomer({
                ...customer,
                phone:e.target.value,
              })
            }
          />

          </div>

          <div className="mb-8">

          <p className="mb-3 font-medium text-[#3A312D]">
            이메일 <span className="text-red-500">*</span>
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

              새로운 컬렉션 및 이벤트 소식을
              이메일로 받아보겠습니다. (선택)

            </span>

          </label>

          <p className="text-sm text-[#8A7A72] italic">

            결제 완료 후
            입력하신 이메일로
            ZIP 다운로드 링크가 발송됩니다.

          </p>

        </div>

      </section>

    );

  }

  // ↓↓↓ 여기부터 기존 ShippingForm 코드 그대로 ↓↓↓
  return (

    <section>

    <h2 className="text-2xl font-light flex items-end gap-3">

      <span>
        배송 정보
      </span>

      <span className="text-base text-[#8A7A72] font-normal">
        Shipping Information
      </span>

      </h2>

      <p className="mt-3 mb-8 text-sm text-[#8A7A72] leading-6">

      <span className="text-red-500">*</span>

      표시된 항목은 필수 입력사항입니다.

      <span className="ml-2 italic">
        (* Required fields)
      </span>

      </p>

      <div className="mt-10 space-y-8">

        {[
          ["받는 분 이름 *","name"],
          ["이메일 *","email"],
          ["휴대전화 *","phone"],
          ].map(([label, key]) => (

          <div key={key}>

            <p className="mb-3 font-medium text-[#3A312D]">
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

        ))} 
          <div>

          <p className="mb-3 font-medium text-[#3A312D]">

            우편번호
            <span className="text-red-500 ml-1">*</span>

            <span className="ml-2 text-sm font-normal text-[#8A7A72]">

            Postal Code

            </span>

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
                min-w-[110px]
                h-[56px]
                rounded-xl
                border
                border-[#D8C7BD]
                hover:bg-black
                hover:text-white
                transition
                text-sm
                font-medium
              "
            >
              주소검색
            </button>

          </div>

          </div>

          <div className="mb-8">
            <p className="mb-3 font-medium text-[#3A312D]">
              주소
              <span className="text-red-500 ml-1">*</span>
              <span className="ml-2 text-sm font-normal text-[#8A7A72]">
                Address
              </span>
            </p>

            <input
              className={input}
              value={customer.address}
              readOnly
            />
          </div>

          <div className="mb-8">

          <p className="mb-3 font-medium text-[#3A312D]">

            상세주소

            <span className="text-red-500 ml-1">*</span>

            <span className="ml-2 text-sm font-normal text-[#8A7A72]">

            Detail Address

            </span>

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
          <div className="mb-8">
        <p className="mb-3 font-medium text-[#3A312D]">

          배송메모

          <span className="ml-2 text-sm font-normal text-[#8A7A72]">

          Delivery Memo

          </span>

          </p>

          <textarea
            rows={3}
            className={input}
            value={customer.memo}
            onChange={(e)=>
              setCustomer({
                ...customer,
                memo:e.target.value,
              })
            }
          />

        </div> </div>

    </section>

  );

}
