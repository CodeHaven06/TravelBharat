import { ChangeEvent } from "react";

type DestinationFormData = {
  destination: string;
  state: string;
  category: string;
  image: string;
  status: string;
};

type DestinationFormProps = {
  formData: DestinationFormData;
  editId: number | null;
  onChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  onAdd: () => void;
  onUpdate: () => void;
  onCancel: () => void;
};

export default function DestinationForm({
  formData,
  editId,
  onChange,
  onAdd,
  onUpdate,
  onCancel,
}: DestinationFormProps) {


  // =======================================================
  return (
    <div className="w-full rounded-xl bg-green-100 p-5 shadow-sm mt-5 lg:w-1/3">

      <h2 className="mb-5 text-2xl font-bold">
        {editId !== null
          ? "Edit Destination"
          : "Add New Destination"}
      </h2>

      {/* Destination */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Destination Name
        </label>

        <input
          name="destination"
          type="text"
          placeholder="e.g. Manali"
          value={formData.destination}
          onChange={onChange}
          className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* State */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          State
        </label>

        <input
          name="state"
          type="text"
          placeholder="e.g. Himachal Pradesh"
          value={formData.state}
          onChange={onChange}
          className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Category
        </label>

        <input
          name="category"
          type="text"
          placeholder="e.g. Mountains"
          value={formData.category}
          onChange={onChange}
          className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Image */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Image URL
        </label>

        <input
          name="image"
          type="url"
          placeholder="https://example.com/image.jpg"
          value={formData.image}
          onChange={onChange}
          className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Preview */}
      {formData.image && (
        <div className="mb-4 rounded-lg bg-white p-2">
          <p className="mb-2 text-sm font-medium">
            Image Preview
          </p>

          <img
            src={formData.image}
            alt="Preview"
            className="h-32 w-full rounded-md object-cover"
          />
        </div>
      )}

      {/* Buttons */}
      {editId !== null ? (
        <div className="flex gap-2">

          <button
            onClick={onUpdate}
            className="flex-1 rounded-md bg-green-600 p-2 text-white hover:bg-green-700"
          >
            Update Destination
          </button>

          <button
            onClick={onCancel}
            className="rounded-md bg-gray-600 px-4 text-white hover:bg-gray-700"
          >
            Cancel
          </button>

        </div>
      ) : (
        <button
          onClick={onAdd}
          className="w-full rounded-md bg-orange-500 p-2 text-white hover:bg-orange-600"
        >
          Add Destination
        </button>
      )}

    </div>
  );
}