import {useState} from "react";
import Modal from "./Modal.jsx";

export default function Table({columns, values, rowRender, editModal}) {
    const [modalState, setModalState] = useState(null);

    const selectedValue = values.find(
        (value) => value.id === modalState
    );

    return (
        <>
            <table className="w-full">
                <thead>
                <tr className="bg-(--bg-secondary) border-b border-(--border-color)">
                    <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">
                        #
                    </th>

                    {columns.map((column) => (
                        <th
                            key={column}
                            className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)"
                        >
                            {column}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody className="divide-y divide-(--border-color)">
                {values.map((value) =>
                    rowRender(value, {
                        onEdit: () => setModalState(value.id),
                    })
                )}
                </tbody>
            </table>

            <Modal
                title="ویرایش"
                onOpen={modalState}
                onClose={() => setModalState(null)}
            >
                {selectedValue && editModal(selectedValue)}
            </Modal>
        </>
    );
}