export type Destination = {
  id: number;
  destination: string;
  state: string;
  category: string;
  image: string;
  status: string;
};

type DestinationTableProps = {
  destinations: Destination[];
  onEdit: (item: Destination) => void;
  onDelete: (id: number) => void;
};

export default function DestinationTable({
  destinations,
  onEdit,
  onDelete,
}: DestinationTableProps) {

  // =======================================================
  return (
    <div className="w-full overflow-x-auto rounded-xl bg-white p-4 mt-5 shadow-sm">

      <div className="flex items-center justify-between rounded-t-xl bg-purple-100 px-4 py-3">
        <h2 className="text-2xl font-bold">
          Recent Destinations
        </h2>

        <span className="text-sm font-medium text-gray-600">
          {destinations.length} Total
        </span>
      </div>

      <table className="mt-4 w-full border-collapse">

        <thead>
          <tr className="bg-pink-100">
            <th className="border p-3">Image</th>
            <th className="border p-3">Destination</th>
            <th className="border p-3">State</th>
            <th className="border p-3">Category</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {destinations.length > 0 ? (
            destinations.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50"
              >
                <td className="border p-2">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.destination}
                      className="mx-auto h-15 w-18 rounded-md object-cover"
                    />
                  ) : (
                    <div className="mx-auto flex h-15 w-18 items-center justify-center rounded-md bg-gray-200 text-xs text-gray-500">
                      No Image Available
                      .+
                    </div>
                  )}
                </td>

                <td className="border p-3 font-medium text-lg">
                  {item.destination}
                </td>

                <td className="border p-3 font-medium text-lg">
                  {item.state}
                </td>

                <td className="border p-3 font-medium text-lg">
                  {item.category}
                </td>

                <td className="border p-3 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="border p-3">
                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => onEdit(item)}
                      className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(item.id)}
                      className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="p-8 text-center text-gray-500"
              >
                No destinations found
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}