export default function matchRoles (roles: string[], userRole: string): boolean{
  return roles.some((role) => ( role === userRole ))
}
