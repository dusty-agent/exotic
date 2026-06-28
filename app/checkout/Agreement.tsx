import Link from "next/link";

export default function Agreement({
  privacy,
  age,
  setPrivacy,
  setAge,
}: any) {

  return (

    <section className="mt-16">

        <label className="flex items-start gap-3">

        <input
          type="checkbox"
          checked={privacy}
          onChange={(e)=>setPrivacy(e.target.checked)}
        />

        <span className="text-sm leading-6">

          개인정보 수집 및 이용에 동의합니다.

          <a
            href="/privacy"
            className="ml-1 underline text-[#8A7A72]"
          >
            (개인정보처리방침)
          </a>

        </span>

        </label>

        <label className="flex items-start gap-3">

          <input
            type="checkbox"
            checked={age}
            onChange={(e)=>setAge(e.target.checked)}
          />

          <span className="text-sm leading-6">
            만 14세 이상이며 이용약관에 동의합니다.
          </span>

          </label>

    </section>

  );

}