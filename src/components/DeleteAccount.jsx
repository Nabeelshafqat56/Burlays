import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaUserMinus, 
  FaEnvelope, 
  FaCopy, 
  FaCheck, 
  FaInfoCircle, 
  FaArrowLeft, 
  FaRegClipboard, 
  FaCalendarAlt, 
  FaTrashAlt, 
  FaDatabase 
} from "react-icons/fa";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const emailAddress = "burlaysofficial@gmail.com";
  const emailSubject = "Delete My Burlays Account";
  const emailBody = `Full Name: [Your Full Name]
Registered Email Address: [Your Registered Email]
Registered Phone Number: [Your Registered Phone Number]
Username (if applicable): [Your Username]
Reason for deletion (optional): [Your Reason]`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(emailBody);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#E25C1D] transition-colors group"
        >
          <FaArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        <motion.div 
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="mx-auto h-20 w-20 bg-red-50 rounded-full flex items-center justify-center mb-6 shadow-sm ring-4 ring-red-50/50">
              <FaUserMinus className="h-10 w-10 text-red-500" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Delete Your Burlays Account
            </h1>
            <p className="mt-4 text-base text-gray-500 max-w-lg mx-auto">
              We're sorry to see you go. If you wish to permanently delete your Burlays account, follow the process outlined below.
            </p>
          </div>

          {/* Email Info Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FFC72C]/20 text-[#E25C1D] text-xs flex items-center justify-center font-bold">1</span>
              How to Request Deletion
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Please send an email to our official support address from your registered email account:
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1 flex items-center gap-3 bg-white px-4 py-3.5 rounded-xl border border-gray-200">
                  <FaEnvelope className="text-gray-400 shrink-0" />
                  <span className="text-gray-800 font-medium select-all text-sm sm:text-base break-all">
                    {emailAddress}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-all"
                  >
                    {copiedEmail ? (
                      <>
                        <FaCheck className="text-green-500" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-gray-500" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                  <a
                    href={mailtoLink}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E25C1D] text-white hover:bg-[#c94e16] font-bold text-sm transition-all shadow-sm hover:shadow"
                  >
                    <FaEnvelope />
                    <span>Compose Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details Template Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFC72C]/20 text-[#E25C1D] text-xs flex items-center justify-center font-bold">2</span>
                Information to Include
              </h2>
              <button
                onClick={handleCopyTemplate}
                className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-bold text-[#E25C1D] hover:text-[#c94e16] transition-colors py-1 px-2.5 rounded-lg bg-orange-50/50 border border-orange-100"
              >
                {copiedTemplate ? (
                  <>
                    <FaCheck className="text-green-500" />
                    <span className="text-green-600">Template Copied!</span>
                  </>
                ) : (
                  <>
                    <FaRegClipboard />
                    <span>Copy Template</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="bg-gray-900 text-gray-300 rounded-2xl p-6 font-mono text-sm shadow-inner relative overflow-hidden border border-gray-800">
              <div className="absolute top-3 right-3 text-xs text-gray-600 uppercase select-none">
                Email Template
              </div>
              <ul className="space-y-3.5 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 font-bold select-none">•</span>
                  <span><strong>Full Name:</strong> <span className="text-gray-500 italic">[Your Full Name]</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 font-bold select-none">•</span>
                  <span><strong>Registered Email Address:</strong> <span className="text-gray-500 italic">[Your Registered Email]</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 font-bold select-none">•</span>
                  <span><strong>Registered Phone Number:</strong> <span className="text-gray-500 italic">[Your Registered Phone Number]</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 font-bold select-none">•</span>
                  <span><strong>Username (if applicable):</strong> <span className="text-gray-500 italic">[Your Username]</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 font-bold select-none">•</span>
                  <span><strong>Reason for deletion:</strong> <span className="text-gray-600 italic">(optional)</span></span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Process Timeline Section */}
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FFC72C]/20 text-[#E25C1D] text-xs flex items-center justify-center font-bold">3</span>
              What Happens Next?
            </h2>
            
            <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-gray-200 ml-3 space-y-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#FFC72C] flex items-center justify-center shadow-sm">
                  <FaCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#E25C1D]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                  Verification
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Our support team will verify your request against our records to ensure account security.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#FFC72C] flex items-center justify-center shadow-sm">
                  <FaCalendarAlt className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#E25C1D]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                  7-Day Deletion Window
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Your account and associated profile settings will be permanently deleted within 7 business days of successful verification.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#FFC72C] flex items-center justify-center shadow-sm">
                  <FaTrashAlt className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#E25C1D]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                  Personal Data Erasure
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  All personal identifiers, contact numbers, and delivery details linked directly to your profile will be wiped from our live database.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-sm">
                  <FaDatabase className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-gray-400" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                  Legal & Financial Records Retention
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Certain records (such as completed order history, tax invoices, and payment logs) may be retained in archiving for period-mandated compliance or legitimate legal and business purposes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info Banner */}
          <motion.div 
            variants={itemVariants} 
            className="flex gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4 text-xs sm:text-sm text-blue-800"
          >
            <FaInfoCircle className="w-5 h-5 shrink-0 mt-0.5 text-blue-500" />
            <p>
              <strong>Important Note:</strong> Once deletion is completed, this action cannot be undone. You will lose access to loyalty rewards, saved addresses, and active order records associated with this account.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeleteAccount;
