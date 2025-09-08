"use client"

type Field = {
  title: string
  type: string
}

type OneTimeFormProps = {
  fields: Field[]
  heading: string
}

export default function OneTimeForm({ fields, heading }: OneTimeFormProps) {
  return (
    <form className="bg-white rounded-lg shadow-md p-6 w-full border">
      {/* Heading controlled by parent (Selector choice) */}
      <h2 className="text-[#169B4C] text-xl font-semibold mb-2">{heading}</h2>
      <hr className="mb-4 border-gray-300" />

      <div className="flex flex-col gap-4">
        {fields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            placeholder={
              field.title.charAt(0).toUpperCase() + field.title.slice(1)
            }
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        ))}
      </div>

      {/* Submit button */}
      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          className="mt-4 w-full md:w-fit bg-[#169B4C] text-white font-medium p-5 rounded-sm shadow hover:bg-green-700 transition flex flex-row items-center justify-center gap-2"
        >
          <span>Donate Now</span>
          <img src="./Images/icons/right-arrow.svg" alt="donate now" />
        </button>
      </div>
    </form>
  )
}