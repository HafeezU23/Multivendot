import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReviewsSearch } from '../../../redux/slices/searchSlice';
import { Search, Trash2, CheckCircle, MessageSquareWarning, Star } from 'lucide-react';

const ReviewsPage = () => {
  const dispatch = useDispatch();
  const searchTerms = useSelector(state => state.search);
  const { reviews } = useSelector(state => state.reviews);

  const handleSearchChange = (e) => {
    dispatch(setReviewsSearch(e.target.value));
  };

  const currentSearchTerm = searchTerms.reviews;

  const filteredReviews = reviews.filter(r => 
    r.id.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
    r.product.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
    r.vendor.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
    r.user.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
    r.text.toLowerCase().includes(currentSearchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-black mb-1">Review Moderation</h1>
          <p className="text-gray-500 text-sm">Moderate flagged customer reviews for policy violations.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search reviews..." 
            value={currentSearchTerm}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all w-full sm:w-64" 
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm"><div className="overflow-x-auto"><table className="w-full text-left min-w-[700px]">
          <thead className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 font-medium">Review ID</th>
              <th className="px-6 py-4 font-medium">Product / Vendor</th>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Content</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {filteredReviews.map((review) => (
              <tr key={review.id} className="hover:bg-gray-50 group">
                <td className="px-6 py-4">
                  <span className="font-bold text-black block mb-1">{review.id}</span>
                  <span className="flex items-center gap-1 text-red-500 text-xs font-bold bg-red-50 px-2 py-0.5 rounded-md w-max">
                    <MessageSquareWarning size={12} /> {review.flagCount} Flags
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-black block">{review.product}</span>
                  <span className="text-gray-500">{review.vendor}</span>
                </td>
                <td className="px-6 py-4 font-medium">{review.user}</td>
                <td className="px-6 py-4 max-w-md">
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} />
                    ))}
                  </div>
                  <p className="text-gray-600 line-clamp-2">{review.text}</p>
                </td>
                <td className="px-6 py-4 flex justify-end gap-2">
                  <button className="flex items-center gap-1.5 text-green-600 hover:bg-green-50 px-3 py-1.5 rounded-md font-medium text-xs transition-colors border border-transparent hover:border-green-200">
                    <CheckCircle size={14} /> Keep
                  </button>
                  <button className="flex items-center gap-1.5 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-md font-medium text-xs transition-colors border border-transparent hover:border-red-200">
                    <Trash2 size={14} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></div>
    </div>
  );
};

export default ReviewsPage;
