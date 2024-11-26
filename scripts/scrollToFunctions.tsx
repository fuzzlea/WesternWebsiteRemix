'use client';

export const scrollTo = (where: string) => {

      if (document.getElementById(where)) {

            document.getElementById(where)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
            })

      }

}