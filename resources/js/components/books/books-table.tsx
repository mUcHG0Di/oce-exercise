import PropTypes from 'prop-types';
import { Book } from '@/types';

interface BooksTableProps {
    books: Book[];
}

const BooksTable = ({ books }: BooksTableProps) => {
    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
                <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Title</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {books.map((book) => (
                    <tr key={book.id}>
                        <td className="px-4 py-2 text-sm">{book.title}</td>
                        <td className="px-4 py-2 text-sm">{book.status}</td>
                        <td className="px-4 py-2 text-sm">{book.notes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const EmptyState = () => {
    return (
        <div className="flex h-full flex-1 flex-col items-center justify-center">
            <p className="text-sm text-gray-500">No books found</p>
        </div>
    );
};

BooksTable.propTypes = {
    books: PropTypes.array.isRequired
};

BooksTable.defaultProps = {
    books: []
};

export {
    BooksTable,
    EmptyState
};
