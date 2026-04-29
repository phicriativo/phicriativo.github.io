import { createContext, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={{
    user: null,
    isAuthenticated: false,
    isLoadingAuth: false,
    isLoadingPublicSettings: false,
    authError: null,
    appPublicSettings: null,
    authChecked: true,
    logout: () => {},
    navigateToLogin: () => {},
    checkUserAuth: async () => {},
    checkAppState: async () => {},
  }}>
    {children}
  </AuthContext.Provider>
)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
