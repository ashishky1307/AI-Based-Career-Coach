'use client';

import { Briefcase, MapPin, Clock, ExternalLink } from "lucide-react";

export default function JobList({ jobs, loading, onPageChange, currentPage }) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
        <p className="text-gray-500">Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-lg text-gray-700 mb-2">{job.company}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {job.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                )}
                {job.type && (
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                )}
                {job.posted && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                )}
              </div>
            </div>
            
            {job.url && (
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Apply
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          
          {job.description && (
            <p className="text-gray-600 text-sm line-clamp-3">{job.description}</p>
          )}
          
          {job.salary && (
            <div className="mt-4 text-sm">
              <span className="font-medium text-green-600">{job.salary}</span>
            </div>
          )}
        </div>
      ))}
      
      {/* Simple pagination - you can enhance this */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Load More Jobs
        </button>
      </div>
    </div>
  );
}
