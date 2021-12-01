import { createContext, FC, useCallback, useContext, useState } from "react"
import { User } from "../types/user"
import isEqual from 'lodash.isequal'

type AuthContextProps = {
  readonly user: User,
  setUser: (user: User) => void,
  hasUser: () => boolean
}

const AuthContext = createContext<AuthContextProps>({
  user: {} as User,
  setUser: () => {},
  hasUser: () => false
})

export const AuthProvider: FC = ({children}) => {

  const [user, setUser] = useState<User>({} as User)
  const hasUser = useCallback(() => {
    return !isEqual(user, {})
  }, [user])

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      hasUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)