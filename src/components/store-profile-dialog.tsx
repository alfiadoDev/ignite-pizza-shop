import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { getRestaurantManager } from '@/api/get-restaurant-manager'

import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storedProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoredProfileSchemaProps = z.infer<typeof storedProfileSchema>

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getRestaurantManager,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoredProfileSchemaProps>({
    resolver: zodResolver(storedProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informacoes do seu estabelecimento visiveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form action="">
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input {...register('name')} className="col-span-3" id="name" />
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descricao
            </Label>
            <Textarea
              {...register('description')}
              className="col-span-3"
              id="description"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" type="button">
            Cancelar
          </Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}