export const fetchUsers = async () => {
    console.log('hola')
    const response = await fetch(`http://192.168.0.3:8080/api/users`)
    const data = await response.json()

    return data
}