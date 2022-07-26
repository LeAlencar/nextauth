/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function dashboard() {
  const { user } = useContext(AuthContext)
  return (
    <h1>DashBoard: {user?.email}</h1>
  )
}