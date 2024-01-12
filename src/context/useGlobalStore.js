import { create } from "zustand";

// Create global state using Zustand
export const useGlobalStore = create((set) => ({
  // Authentication and Signup State
  isSignup: false,
  setIsSignup: (isSignup) => set({ isSignup }),

  // Password Visibility State
  showPassword: false,
  setShowPassword: (showPassword) => set({ showPassword }),

  selectedAiValue: "",
  setSelectedAiValue: (selectedAiValue) => set({selectedAiValue}),
  // showing ShareSosialMedia Popup Modal Component
  setIsShowShareSosialMedia: (isShowShareSosialMedia) => set({isShowShareSosialMedia}),
  isShowShareSosialMedia: false,
 
  isEditProfile: false,
  setIsEditProfile: (isEditProfile) => set({isEditProfile}),

  // Customization Modal Visibility State
  showCustomization: false,
  setShowCustomization: (showCustomization) => set({ showCustomization }),

  // Authentication State
  isAuth: false,
  setIsAuth: (isAuth) => set({ isAuth }),

  // Image Preview State to show previewImage component
  previewImage: false,
  setPreviewImage: (previewImage) => set({ previewImage }),

  // Dark Mode State
  dark: false,
  setDark: (dark) => set({ dark }),

  // Email Sending State to show sendMail in mobile devices
  sendMail: false,
  setSendMail: (sendMail) => set({ sendMail }),

  // Email Preview State to show Email Preview Email in mobile devices
  previewEmail: false,
  setPreviewEmail: (previewEmail) => set({ previewEmail }),

  // Side History Panel State
  showSideHistory: false,
  setShowSideHistory: (showSideHistory) => set({ showSideHistory }),

  pdfFile: null,
  setPdfFile: (pdfFile) => set({pdfFile}),
  setPdfName: (pdfName) => set({pdfName}),
  pdfName: null

}));
