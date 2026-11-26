
import React from 'react'

import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">

      <Card className="w-full max-w-sm">

        <CardHeader>

          <CardTitle className="text-green-700 text-2xl">
            FoodLoop Login
          </CardTitle>

          <CardDescription>
            Login to your Food Waste Management Account
          </CardDescription>

        </CardHeader>

        <CardContent>

          <form className="space-y-5">

            <div className="grid gap-2">

              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
              />

            </div>

            <div className="grid gap-2">

              <Label htmlFor="password">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />

            </div>

          </form>

        </CardContent>

        <CardFooter>

          <Button className="w-full bg-green-700 hover:bg-green-800">
            Login
          </Button>

        </CardFooter>

      </Card>

    </div>
  )
}

export default Login
