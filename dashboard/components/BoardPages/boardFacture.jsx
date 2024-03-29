import { PlusIcon } from "@heroicons/react/20/solid";


export default function BoardFacture() {
  return (
    <div className="overflow-hidden mt-8 rounded-lg border-2 border-gray-200 px-4 pb-5 pt-5 sm:px-6 sm:pt-6">
      <div className="text-xl py-3  sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p>Facture</p>
        </div>
        <div className=" sm:ml-16 sm:mt-0 sm:flex-none">
          <a
            href="/Factures/factureCreate"
            type="button"
            className=" inline-flex rounded-md bg-white outline outline-offset-2 outline-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-600 hover:text-white cursor-pointer"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Créer une facture
          </a>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              SI
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              No. Facture
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Prestations
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Date Facture
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Client
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Montants
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="rounded-lg ">
          <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"></td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"></td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
            <td className="whitespace-nowrap py-4 text-sm text-gray-500">
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Edit<span className="sr-only"></span>
              </a>
              <a href="#" className="text-red-600 px-4">
                Supprimer<span className="sr-only"></span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
