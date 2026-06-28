import Link from "next/link";

export default function Agreement({
  privacy,
  age,
  setPrivacy,
  setAge,
}: any) {

  return (

    <section className="mt-16">

      <label className="flex gap-3">

        <input
          type="checkbox"
          checked={privacy}
          onChange={()=>
            setPrivacy(!privacy)
          }
        />

        <span>

          I agree to the collection and use of personal information.

          <Link
            href="/privacy"
            className="underline ml-2"
          >
            Privacy Policy
          </Link>

        </span>

      </label>

      <label className="flex gap-3 mt-6">

        <input
          type="checkbox"
          checked={age}
          onChange={()=>
            setAge(!age)
          }
        />

        <span>
          I confirm that I am at least 14 years old.
        </span>

      </label>

    </section>

  );

}