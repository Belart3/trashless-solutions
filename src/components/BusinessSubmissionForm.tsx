"use client"

type Field = {
  title: string
  type: string
}

type BusinessSubmissionFormProps = {
  fields: Field[]
  heading: string
}

export default function BusinessSubmissionForm({ fields, heading }: BusinessSubmissionFormProps) {
  return (
    <form className="bg-white rounded-lg shadow-md p-6 w-full border">
      {/* Heading controlled by parent (Selector choice) */}
      <h2 className="text-[#169B4C] text-xl font-semibold mb-2">{heading}</h2>
      <hr className="mb-4 border-gray-300" />

      <div className="flex flex-col gap-4">
        {fields.map((field, index) => (
  field.type === "textarea" ? (
    <textarea
      key={index}
      placeholder={field.title}
      className="p-3 border rounded-md w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  ) : (
    <input
      key={index}
      type={field.type}
      placeholder={field.title}
      className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  )
))}
      </div>

        {/* Upload Logo Button */}
     <div className="flex justify-center">
        <button
          className="mt-4 w-full md:w-full  font-medium px-4 py-2.5 rounded-sm shadow  transition flex flex-row items-center gap-2 h-[48px] border-[#E6E6E6] border cursor-pointer"
        >
          <span className="text-[#666] text-[16px]">Upload Logo and 1-3 Product Images</span>
        </button>
      </div>


      {/* Submit button */}
      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          className="mt-4 w-full md:w-fit bg-[#169B4C] text-white font-medium p-5 rounded-sm shadow hover:bg-green-700 transition flex flex-row items-center justify-center gap-2"
        >
          <span>Submit</span>
          <img src="./Images/icons/right-arrow.svg" alt="Submit" />
        </button>
      </div>
    </form>
  )
}