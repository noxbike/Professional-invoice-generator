export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/invoices/:path*',
    '/setting/:path*',
    '/company_info/:path*',
    '/new_invoice/:path*',
  ],
}