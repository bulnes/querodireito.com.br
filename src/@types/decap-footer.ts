export interface DecapFooter {
  /** Razão social completa da empresa. Ex: "Caio George Santos Assessoria LTDA" */
  razao_social: string;
  /** CNPJ da empresa. Ex: "42.958.930/0001-00" */
  cnpj: string;
  /** Endereço completo formatado em múltiplas linhas. */
  address: string;
  /** Número de telefone formatado. Ex: " (11) 5123-2482" */
  phone_number: string;
  /** E-mail de contato da empresa. Ex: "atendimento@querodireito.com.br" */
  email: string;
  /** Aviso legal ou disclaimer da empresa, possivelmente em múltiplas linhas. */
  aviso_legal: string;
  /** Array de seções, contendo títulos e links de navegação. */
  sections: {
    /** Título da seção. Ex: "Serviços" */
    title: string;
    /** Array de objetos de link dentro desta seção. */
    links: {
      /** Rótulo (texto) exibido para o link. Ex: "Advogado Trabalhista" */
      label: string;
      /** URL para onde o link aponta. Ex: "/" */
      url: string;
    }[];
  }[];
}