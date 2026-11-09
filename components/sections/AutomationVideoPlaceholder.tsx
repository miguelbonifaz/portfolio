import { PlayCircle } from "lucide-react";

export default function AutomationVideoPlaceholder() {
  return (
    <div className="lg:col-span-5">
      <div className="sticky top-8">
        <div className="aspect-[9/16] relative rounded-xl overflow-hidden border-2 border-dashed border-gray-200 bg-gray-50 max-w-sm mx-auto flex items-center justify-center">
          <div className="text-center p-8 space-y-4">
            <PlayCircle className="w-16 h-16 text-gray-300 mx-auto" />
            <p className="text-sm font-medium text-gray-700">
              Video demo próximamente
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Este agente ya está en producción. Pronto habrá un video
              mostrándolo en acción.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
